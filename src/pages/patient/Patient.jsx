import {useLocation} from 'react-router-dom';

export const Patient = () => {
    const location = useLocation();
    const {patientInfo, scanInfo} = location.state;
    const patient = patientInfo[0]
    const scan = scanInfo[0]
    return (
        <div>
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
        </div>
    )
    
}