import { observer } from "mobx-react-lite"
import { useStore } from "../app/stores/store";
import { Divider, Grid, Typography } from "@mui/material";
import DogsCard from "./Components/DogsCard";
import { useNavigate } from "react-router-dom";

export default observer(function FavoritesPage() {
    const { dogsStore: { favoriteDogs, removeFavorite, addNote } } = useStore();
    const navigate = useNavigate();
    return (
        <>
            <Typography color='primary' variant="h6" gutterBottom>
                Favorite Dog Breeds
            </Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            {favoriteDogs.length === 0 && <Typography color='error' fontStyle='italic' variant="h6" gutterBottom>
                No favorite dogs yet. Add some!
            </Typography>}

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 10 }}>
                {favoriteDogs.map((x) => (
                    <>
                        <Grid item xs={2} sm={3} md={2} key={x.id}>
                            <DogsCard
                                key={x.id}
                                dogId={x.id}
                                removeDog={removeFavorite}
                                dogsName={x.name}
                                navigate={navigate}
                                notes={x.notes || ""}
                                addNote={addNote}
                            />
                        </Grid>
                    </>
                ))}
            </Grid>
        </>
    )
})
