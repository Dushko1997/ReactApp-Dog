import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../app/stores/store";
import { useEffect } from "react";
import { Button, CircularProgress, Divider } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DogTable from "./Components/DogTable";

export default observer(function DogDetails() {
    const { dogsStore: { loadDog, selectedDog, loading, dogImage, loadDogImage } } = useStore();
    const { id } = useParams<{ id: any }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            loadDog(id).then(() => {
                if (selectedDog?.reference_image_id) {
                    loadDogImage(selectedDog.reference_image_id);
                }
            });
        }
    }, [id, loadDog, loadDogImage, selectedDog?.reference_image_id]);

    if (loading || !selectedDog) return <CircularProgress />;

    return (
        <>
            <DogTable selectedDog={selectedDog} dogImage={dogImage} />
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Button
                variant="contained"
                color="error"
                startIcon={<ArrowBackIcon />}
                onClick={() => { navigate('/mainpage') }}>Back</Button>
        </>
    )
})