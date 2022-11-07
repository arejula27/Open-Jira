import React, { ChangeEvent, useState, FC, useContext } from 'react';
import { Layout } from '../../components/layouts';
import {
    capitalize,
    Card,
    Grid,
    CardHeader,
    CardContent,
    TextField,
    CardActions,
    Button,
    IconButton,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import { useSnackbar } from 'notistack';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Entry, EntryStatus } from '../../interfaces';
import { GetServerSideProps } from 'next';
import { isValidObjectId } from 'mongoose';
import { dbEntries } from '../../database';
import { EntriesContext } from '../../context/entries';
import { getFormatDistanceToNow } from '../../utils';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];
interface Props {
    entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
    const { updateEntry } = useContext(EntriesContext);
    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);

    const onTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
    };

    const onSave = () => {
        if (inputValue.trim().length === 0) return;
        const updatedEntry: Entry = {
            ...entry,
            status,
            description: inputValue
        };
        updateEntry(updatedEntry, true);
    };

    return (
        <Layout title={entry.description.substring(0, 20) + '...'}>
            <Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        {' '}
                        <CardHeader
                            title={`Entrada: ${inputValue}`}
                            subheader={`Creado hace ${getFormatDistanceToNow(
                                entry.createdAt
                            )} minutos`}
                        />
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="Nueva entrada"
                                autoFocus
                                multiline
                                label="Nueba entrada"
                                value={inputValue}
                                onChange={onTextChanged}
                                helperText={
                                    inputValue.length <= 0 &&
                                    touched &&
                                    'Escribe algo manin'
                                }
                                onBlur={() => {
                                    setTouched(true);
                                }}
                                error={inputValue.length <= 0 && touched}
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChange}
                                >
                                    {validStatus.map((status) => (
                                        <FormControlLabel
                                            key={status}
                                            value={status}
                                            control={<Radio />}
                                            label={capitalize(status)}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={<SaveIcon />}
                                fullWidth
                                variant="contained"
                                onClick={onSave}
                                disabled={inputValue.length <= 0}
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'error.dark'
                }}
            >
                <DeleteIcon />
            </IconButton>
        </Layout>
    );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //no hacemos peticion a nuestro endpoint de la api
    //por que ya somos el propio server

    //si no es valido mandamos a otra pag
    const { id } = ctx.params as { id: string };
    const entrie = await dbEntries.getEntryById(id);
    if (!entrie) {
        return {
            redirect: { destination: '/', permanent: false }
        };
    }

    return {
        props: {
            entry: entrie
        }
    };
};

export default EntryPage;
