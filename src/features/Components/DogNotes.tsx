import { useState } from 'react';
import { Box, TextField, Button } from "@mui/material";

interface Props {
    dogId: number;
    notes: string;
    addNote: (id: number, note: string) => void;
}

export default function DogNotes({ dogId, notes, addNote }: Props) {
    const [note, setNote] = useState(notes);

    const handleSave = () => {
        addNote(dogId, note);
    };

    return (
        <Box>
            <TextField
                label="Notes"
                multiline
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                variant="outlined"
                fullWidth
            />
            <Button onClick={handleSave} variant="contained" sx={{ marginTop: 2 }}>
                Save
            </Button>
        </Box>
    );
}
