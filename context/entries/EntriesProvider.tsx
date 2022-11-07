import { FC, useEffect, useReducer } from 'react';
import { PropsWithChildren } from 'react';
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '../../interfaces/';
import { entriesApi } from '../../apis/';
import { useSnackbar } from 'notistack';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: []
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addEntry = async (description: string) => {
        const { data } = await entriesApi.post<Entry>('/entries', {
            description
        });
        dispatch({ type: 'Entry - Add entry', payload: data });
    };

    const updateEntry = async (entry: Entry, showSnackbar = false) => {
        try {
            const { data } = await entriesApi.put<Entry>(
                `/entries/${entry._id}`,
                { description: entry.description, status: entry.status }
            );

            dispatch({ type: 'Entry - Update entry', payload: data });
            if (showSnackbar) {
                enqueueSnackbar('entrada actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                });
            }
        } catch (error) {}
    };
    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: 'Entry - Refresh data', payload: data });
    };

    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                addEntry,
                updateEntry
            }}
        >
            {children}
        </EntriesContext.Provider>
    );
};
