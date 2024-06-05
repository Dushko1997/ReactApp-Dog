import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { DogImage, Dogs, DogsStatus } from "../common/types/Dogs";
import { toast } from "react-toastify";


export default class DogsStore {

    dogsRegistry = new Map<number, Dogs>();
    dogsStatusRegistry = new Map<number, DogsStatus>();

    selectedDog: Dogs | null = null;
    dogImage: DogImage | null = null;

    favorites = JSON.parse(localStorage.getItem('favorites') || '[]');


    constructor() {
        makeAutoObservable(this);
        this.loadFavoritesFromLocalStorage();
    }

    loading = false;
    loadingInitial = false;

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    setLoading = (state: boolean) => {
        this.loading = state;
    }

    get dogs() {
        return Array.from(this.dogsRegistry.values());
    }

    get favoriteDogs() {
        return Array.from(this.dogsStatusRegistry.values()).filter(dog => dog.status);
    }

    loadDogs = async () => {
        this.setLoadingInitial(true)
        try {
            const d = await agent.DogAPI.listBreeds();
            this.dogsRegistry.clear();
            this.dogsStatusRegistry.clear();
            runInAction(() => {
                d.forEach(x => {
                    this.dogsRegistry.set(x.id!, x);
                    this.dogsStatusRegistry.set(x.id!, { ...x, status: false });
                });
            })
        } catch (error) {
            console.log(error)
        } finally {
            this.setLoadingInitial(false)
        }
    }

    loadDog = async (id: number) => {
        this.setLoading(true);
        try {
            const dog = await agent.DogAPI.details(id);
            runInAction(() => {
                this.selectedDog = dog;
            });
            toast.success('Dog loaded successfully');
        } catch (error) {
            console.log(error);
            toast.error('Problem loading dog');
        } finally {
            this.setLoading(false);
        }
    }

    loadDogImage = async (imageId: string) => {
        try {
            const image = await agent.DogAPI.image(imageId);
            runInAction(() => {
                this.dogImage = image;
            });
        } catch (error) {
            console.log(error);
        }
    }

    addFavorite = (id: number) => {
        const dog = this.dogsStatusRegistry.get(id);
        if (dog) {
            dog.status = true;
            this.dogsStatusRegistry.set(id, dog);
            toast.success("Dog added to favorites")
        }
    }

    removeFavorite = (id: number) => {
        const dog = this.dogsStatusRegistry.get(id);
        if (dog) {
            dog.status = false;
            this.dogsStatusRegistry.set(id, dog);
            toast.success("Dog removed from favorites")
        }
    };

    isFavorite = (id: number) => {
        const dog = this.dogsStatusRegistry.get(id);
        return dog ? dog.status : false;
    };

    addNote = (id: number, note: string) => {
        const dog = this.dogsStatusRegistry.get(id);
        if (dog) {
            dog.notes = note;
            this.dogsStatusRegistry.set(id, dog);
            this.saveFavoritesToLocalStorage();
            toast.success("Note added successfully");
        }
    }

    saveFavoritesToLocalStorage = () => {
        localStorage.setItem('favorites', JSON.stringify(Array.from(this.dogsStatusRegistry.entries())));
    }

    loadFavoritesFromLocalStorage = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites.forEach(([id, dogStatus]: [number, DogsStatus]) => {
            this.dogsStatusRegistry.set(id, dogStatus);
        });
    }

}