import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "age", headerName: "Age", width: 130 },
  {
    field: "salary",
    headerName: "Salary",
    type: "string",
    width: 130,
  },
  {
    field: "experience",
    headerName: "Experience",
    type: "number",
    width: 130,
    align: "center"
  },
  {
    field: "department",
    headerName: "Department",
    type: "string",
    width: 190,
  },
];
