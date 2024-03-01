import React from "react";
import { EmployeeType } from "../types/EmployeeType";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns } from "../utils/EmployeeTableColumns";

type EmployeeTableProps = {
  employess: EmployeeType;
};

const EmployeeTable = ({ employess }: EmployeeTableProps) => {
  return (
    <div className="h-auto m-auto p-4 w-full lg:w-3/5">
      <DataGrid
        rows={employess}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
            borderColor: 'gray',
            '& .MuiDataGrid-cell': {
              borderColor: "gray"
            },
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
        }}
      />
    </div>
  );
};

export default EmployeeTable;
