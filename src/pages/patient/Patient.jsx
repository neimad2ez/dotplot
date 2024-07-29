import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './patient.css';
import {useEffect} from 'react';


export const Patient = () => {
    const location = useLocation();
    const {patientInfo, scanInfo} = location.state;
    const patient = patientInfo[0]
    const scan = scanInfo[0]
    const navigate = useNavigate();
    const coord1 = scan["Coordinates"][0]
    const coord2 = Number(scan["Coordinates"][1])

    function handleBack(){
        navigate('/private');
        }
        function createGrid(rows, columns) {
            const gridOverlay = document.getElementById('grid-overlay');
            gridOverlay.innerHTML = ''; // Clear existing grid
            const gridWidth = gridOverlay.clientWidth;
            const gridHeight = gridOverlay.clientHeight;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    const gridCell = document.createElement('div');
                    gridCell.className = 'grid';
                    gridCell.style.left = `${j * (gridWidth / columns)}px`;
                    gridCell.style.top = `${i * (gridHeight / rows)}px`;
                    gridCell.dataset.row = i;  // Store row information
                    gridCell.dataset.col = j;  // Store column information
                    gridOverlay.appendChild(gridCell);
                }
            }
        }

        function highlightRegion(col, row) {
            const cells = document.querySelectorAll('#grid-overlay .grid');
            cells.forEach(cell => {
                const cellRow = parseInt(cell.dataset.row, 10)+1;
                const cellCol = parseInt(cell.dataset.col, 10)+1;
                if (cellRow === row && cellCol === col) {
                    cell.classList.add('active');
                } else {
                    cell.classList.remove('active');
                }
            });
        }
        const objectDict = {
            'A':1,
            'B':2,
            'C':3,
            'D':4,
            'E':5,
            'F':6,
            'G':7,
            'H':8
        };
        useEffect(() => {
            createGrid(4, 8);
            highlightRegion(objectDict[coord1], coord2);
        }, []);

    return (
        <div>
            <div class="container">
                <div id="img">
                    <img src="src\pictures\dotplot.jpeg" />
                </div>
                <div class="box">Box 1</div>
                <div class="box">Box 2</div>
                <div class="box">Box 3</div>
                <div className='btn'>
                    <button onClick={handleBack}>Back</button>
                </div>
            </div>

                <h2>HELLO</h2>
                <h1>Patient Information</h1>
                    <h4>Patient ID: {patient["Patient ID"]}</h4>
                    <h4>Name: {patient["Patient Name"]}</h4>
                    <h4>Age: {patient["Age"]}</h4>
                    <h4>Height: {patient["Height (cm)"]}cm</h4>
                    <h4>Weight: {patient["Weight (kg)"]}kg</h4>
                    <h4>History of Breast Cancer: {patient["History of breast cancer"]}</h4>
                    <h4>US scan ID: {patient["US scan ID"]}</h4>
                <h1>Scan Information</h1>
                    <h4>Scan Date: {scan["Scan Date"]}</h4>
                    <h4>Diagnosis: {scan["Diagnosis"]}</h4>
                    <h4>Coordinate of Lesion: {scan["Coordinates"]}</h4>
                    <center>
        <div className="image-container">
            <img id="image" src="https://uploads-ssl.webflow.com/669ff9d1f834f9d0603e5d17/66a0f6f59068fe3c45aa7907_3d%20model.png" alt="Sample Image"/>
            <div className="grid-overlay" id="grid-overlay"></div>
        </div>
    </center>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </div>
        

    )
    
}