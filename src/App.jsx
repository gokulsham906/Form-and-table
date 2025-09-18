import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const initialFormData = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const handleFormDataChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      
      setTableData([...tableData, formData]);
    } else {
    
      const updatedData = [...tableData];
      updatedData[editIndex] = formData;
      setTableData(updatedData);
      setEditIndex(null);
    }

    setFormData(initialFormData); 
  };

  const handleEdit = (index) => {
    console.log("edit clicked on row", index);
    const clickedItem = tableData[index]; 
    setFormData(clickedItem);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  
    if (editIndex === index) {
      setFormData(initialFormData);
      setEditIndex(null);
    }
  };

  return (
    <div className="p-6 mx-auto max-w-2xl">
      <Form
        handleFormDataChange={handleFormDataChange}
        handleSubmit={handleSubmit}
        formData={formData}
        editIndex={editIndex}
      />
      <Table
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
