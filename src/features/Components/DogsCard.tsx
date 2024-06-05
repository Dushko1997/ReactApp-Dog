import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Avatar, CardHeader, Divider, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DogNotes from "./DogNotes";

interface Props {
    dogsName: string;
    dogId: number;
    removeDog: (id: number) => void;
    navigate: (path: string) => void;
    notes: string;
    addNote: (id: number, note: string) => void;

}

export default function DogsCard({ dogsName, removeDog, dogId, navigate, notes, addNote }: Props) {
    const firstLatter = dogsName?.charAt(0).toUpperCase();

    return (
        <>
            <Card >
                <CardActionArea
                >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ color: 'primary' }} aria-label="recipe">
                                {firstLatter}
                            </Avatar>
                        }
                        onClick={() => navigate(`/dogDetails/${dogId}`)}
                        title={dogsName}
                        titleTypographyProps={{ color: 'primary', fontWeight: 'bold' }}
                        subheaderTypographyProps={{ color: 'secondary' }}
                    />

                    <Divider />
                    <CardContent >
                        <DogNotes dogId={dogId} notes={notes} addNote={addNote} />
                        <Stack direction="row" spacing={1} sx={{ gap: 'px', justifyContent: 'center' }}>
                            <Button
                                sx={{ position: 'relative', marginTop: '-36px !important', left: '30px' }}
                                onClick={(e) => { e.stopPropagation(); removeDog(dogId) }}
                                color="error"
                                variant="contained"  >
                                <DeleteIcon />
                            </Button>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}