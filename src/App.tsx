import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import "./firebase/Firebase";
import { getDatabase, ref, onValue, off } from "firebase/database";
import EmployeeTable from "./components/EmployeeTable";
import { EmployeeType } from "./types/EmployeeType";

function App() {
  const [employess, setEmployees] = useState<EmployeeType>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const database = getDatabase();
    const refHook = ref(database, "react-task/employees");
    onValue(
      refHook,
      (snapshot: any) => {
        let employeeData: EmployeeType = Object.values(snapshot.val()); 
        employeeData = employeeData.sort((a, b) =>  a.id - b.id);
        setEmployees(employeeData);
      },
      (errorObject: Error) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
    return () => {
      off(refHook);
    };
  }, []);

  const filterdEmployees = useMemo(
    () =>
      employess?.filter(({ name }) =>
        name?.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [employess, searchValue]
  );

  return (
    <div className="p-4">
      <div className="flex justify-center	w-full lg:w-2/5 items-center align-center lg:m-auto py-4">
        <input
          type="text"
          placeholder="Search employee by name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <EmployeeTable employess={filterdEmployees} />
    </div>
  );
}

export default App;
