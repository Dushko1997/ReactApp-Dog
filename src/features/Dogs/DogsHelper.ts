import { Button } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

export const createDogsTableColumns = (navigate: (path: string) => void): GridColDef[] => [
    {
        field: 'name',
        headerName: 'Name',
        editable: false,
        width: 200,
    },
    {
        field: 'origin',
        headerName: 'Origin',
        width: 200,
        editable: false,
    },
    {
        field: 'life_span',
        headerName: 'Life Span',
        width: 140,
        editable: false,
    },
    {
        field: 'breed_group',
        headerName: 'Breeds Group',
        width: 140,
        editable: false,
    },
    {
        field: 'temperament',
        headerName: 'Temperament',
        width: 150,
        editable: false,
    },
    {
        field: 'details',
        headerName: 'Details',
        sortable: false,
        filterable: false,
        width: 220,
        renderCell: (params: GridRenderCellParams) => {
            
            return (
                React.createElement(Button, {
                    onClick: () => navigate(`/dogDetails/${params.id as number}`),
                    variant: 'contained',
                    color: 'primary',
                }, 'View Dog Details')

            );
        },


    },
];

