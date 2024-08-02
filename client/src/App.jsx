import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Examplereport from './Examplereport';

function App() {
  const [Datalist, setDatalist] = useState([
    { customer: "John", product: "Laptop", item: 12, price: 3456 },
    { customer: "Alice", product: "Phone", item: 8, price: 789 },
    { customer: "Bob", product: "Tablet", item: 5, price: 1234 },
    { customer: "Eve", product: "Monitor", item: 9, price: 5678 },
    { customer: "Charlie", product: "Keyboard", item: 7, price: 2345 },
    { customer: "David", product: "Mouse", item: 11, price: 345 },
    { customer: "Frank", product: "Printer", item: 2, price: 4567 },
    { customer: "Grace", product: "Scanner", item: 10, price: 123 },
    { customer: "Heidi", product: "Camera", item: 6, price: 6789 },
    { customer: "Ivy", product: "Speaker", item: 1, price: 987 },
    { customer: "Jack", product: "Microphone", item: 3, price: 234 },
    { customer: "Kathy", product: "Headphone", item: 4, price: 456 },
    { customer: "Leo", product: "Charger", item: 14, price: 7890 },
    { customer: "Mia", product: "Battery", item: 13, price: 6543 },
    { customer: "Nick", product: "Adapter", item: 15, price: 3210 },
    { customer: "Olivia", product: "Laptop", item: 12, price: 3456 },
    { customer: "Sophia", product: "Phone", item: 8, price: 789 },
    { customer: "Liam", product: "Tablet", item: 5, price: 1234 },
    { customer: "Noah", product: "Monitor", item: 9, price: 5678 },
    { customer: "James", product: "Keyboard", item: 7, price: 2345 },
    { customer: "William", product: "Mouse", item: 11, price: 345 },
    { customer: "Benjamin", product: "Printer", item: 2, price: 4567 },
    { customer: "Lucas", product: "Scanner", item: 10, price: 123 },
    { customer: "Henry", product: "Camera", item: 6, price: 6789 },
    { customer: "Alexander", product: "Speaker", item: 1, price: 987 },
    { customer: "Sebastian", product: "Microphone", item: 3, price: 234 },
    { customer: "Elijah", product: "Headphone", item: 4, price: 456 },
    { customer: "Matthew", product: "Charger", item: 14, price: 7890 },
    { customer: "Jackson", product: "Battery", item: 13, price: 6543 },
    { customer: "Logan", product: "Adapter", item: 15, price: 3210 },
    { customer: "John", product: "Laptop", item: 12, price: 3456 },
    { customer: "Alice", product: "Phone", item: 8, price: 789 },
    { customer: "Bob", product: "Tablet", item: 5, price: 1234 },
    { customer: "Eve", product: "Monitor", item: 9, price: 5678 },
    { customer: "Charlie", product: "Keyboard", item: 7, price: 2345 },
    { customer: "David", product: "Mouse", item: 11, price: 345 },
    { customer: "Frank", product: "Printer", item: 2, price: 4567 },
    { customer: "Grace", product: "Scanner", item: 10, price: 123 },
    { customer: "Heidi", product: "Camera", item: 6, price: 6789 },
    { customer: "Ivy", product: "Speaker", item: 1, price: 987 },
    { customer: "Jack", product: "Microphone", item: 3, price: 234 },
    { customer: "Kathy", product: "Headphone", item: 4, price: 456 },
    { customer: "Leo", product: "Charger", item: 14, price: 7890 },
    { customer: "Mia", product: "Battery", item: 13, price: 6543 },
    { customer: "Nick", product: "Adapter", item: 15, price: 3210 },
    { customer: "Olivia", product: "Laptop", item: 12, price: 3456 },
    { customer: "Sophia", product: "Phone", item: 8, price: 789 },
    { customer: "Liam", product: "Tablet", item: 5, price: 1234 },
    { customer: "Noah", product: "Monitor", item: 9, price: 5678 },
    { customer: "James", product: "Keyboard", item: 7, price: 2345 },
    { customer: "William", product: "Mouse", item: 11, price: 345 },
    { customer: "Benjamin", product: "Printer", item: 2, price: 4567 },
    { customer: "Lucas", product: "Scanner", item: 10, price: 123 },
    { customer: "Henry", product: "Camera", item: 6, price: 6789 },
    { customer: "Alexander", product: "Speaker", item: 1, price: 987 },
    { customer: "Sebastian", product: "Microphone", item: 3, price: 234 },
    { customer: "Elijah", product: "Headphone", item: 4, price: 456 },
    { customer: "Matthew", product: "Charger", item: 14, price: 7890 },
    { customer: "Jackson", product: "Battery", item: 13, price: 6543 },
    { customer: "Logan", product: "Adapter", item: 15, price: 3210 }, 
    { customer: "John", product: "Laptop", item: 12, price: 3456 },
    { customer: "Alice", product: "Phone", item: 8, price: 789 },
    { customer: "Bob", product: "Tablet", item: 5, price: 1234 },
    { customer: "Eve", product: "Monitor", item: 9, price: 5678 },
    { customer: "Charlie", product: "Keyboard", item: 7, price: 2345 },
    { customer: "David", product: "Mouse", item: 11, price: 345 },
    { customer: "Frank", product: "Printer", item: 2, price: 4567 },
    { customer: "Grace", product: "Scanner", item: 10, price: 123 },
    { customer: "Heidi", product: "Camera", item: 6, price: 6789 },
    { customer: "Ivy", product: "Speaker", item: 1, price: 987 },
    { customer: "Jack", product: "Microphone", item: 3, price: 234 },
    { customer: "Kathy", product: "Headphone", item: 4, price: 456 },
    { customer: "Leo", product: "Charger", item: 14, price: 7890 },
    { customer: "Mia", product: "Battery", item: 13, price: 6543 },
    { customer: "Nick", product: "Adapter", item: 15, price: 3210 },
    { customer: "Olivia", product: "Laptop", item: 12, price: 3456 },
    { customer: "Sophia", product: "Phone", item: 8, price: 789 },
    { customer: "Liam", product: "Tablet", item: 5, price: 1234 },
    { customer: "Noah", product: "Monitor", item: 9, price: 5678 },
    { customer: "James", product: "Keyboard", item: 7, price: 2345 },
    { customer: "William", product: "Mouse", item: 11, price: 345 },
    { customer: "Benjamin", product: "Printer", item: 2, price: 4567 },
    { customer: "Lucas", product: "Scanner", item: 10, price: 123 },
    { customer: "Henry", product: "Camera", item: 6, price: 6789 },
    { customer: "Alexander", product: "Speaker", item: 1, price: 987 },
    { customer: "Sebastian", product: "Microphone", item: 3, price: 234 },
    { customer: "Elijah", product: "Headphone", item: 4, price: 456 },
    { customer: "Matthew", product: "Charger", item: 14, price: 7890 },
    { customer: "Jackson", product: "Battery", item: 13, price: 6543 },
    { customer: "Logan", product: "Adapter", item: 15, price: 3210 }
  ])
  
    
  return (  
    <center>
      <div className="col">
        <h1>Example Report</h1>
        <div onClick={(e)=> {Examplereport(Datalist)}}>
          Generate Report
        </div>
      </div>
    </center>
    
  );
}

export default App;
