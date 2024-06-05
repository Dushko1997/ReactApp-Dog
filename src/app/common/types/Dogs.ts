export interface Dogs {
    id: number;
    name: string;
    breed: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    weight: Weight[];
    height: Height[];
    bred_for: string;
    reference_image_id: string;
    age: number;
}

export interface DogsStatus extends Dogs {
    status?: boolean;
    notes?: string;
}

export interface Height {
    imperial: string;
    metric: string;
}

export interface Weight {
    imperial: string;
    metric: string;
}

export interface DogImage {
    id?: string;
    url: string;
}