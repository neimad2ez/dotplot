# DotPlot Portal

DotPlot Portal is a Patient Data Management System & Visualisation Tool. It allows for users to log in and sign up and look for patient ID's to see a patients information e.g Patient Name, Diagnosis and Coordinates of Lesion. Furthermore, it gives pictures of the ultrasound taken and a 2D model of where the lesion is. 

## Key Features

### Patient Data Management
* **Displays** patient records such as patient name, age and diagnosis of the patients breast cancer. Also, the application displays the patients ultrasound image.

### 2D Torso Visualisation
* **Displays** a **2D torso** and shows where the patients breast lesion is located.

### Log In / Sign Up Page
* **Sign up** and **log in** to the application in order to view patient information. (Note. as this is a MVP (Minimum Viable Product) users are able to sign up, but in the end product doctors and nurses will only be able to sign up with specific log-ins given.)

### Databases / Security
* **MongoDB:** Document database which is flexible and scalable, stores patient information from .csv file provided. Offers built-in encryption and authentication which securely stores patient data.
* **Firebase:** Database which stores authentication details e.g doctor details for logging in and signing up. Used for sign up / log in page, securely storing doctors account.

### Backend
* Uses Node.js, Express and Cors to handle data operations and API calls.

## Technologies Used
* React
* Node.js
* Express
* MongoDB
* Firebase
* Vite
* HTML
* CSS

## Demo

https://github.com/user-attachments/assets/888f91c2-04ff-49f1-b501-4f39739c623f

## Getting Started
In order to run the DotPlot Portal application, follow these steps:

### Prerequisites
* Node.js
* MongoDB

### Installation
1. Clone the GitHub repository

    ```
    git clone https://github.com/neimad2ez/dotplot.git
    ```

2. Navigate to project directory
    
    ```
    cd dotplot
    ```

### Backend Setup

1. Navigate to server directory
    ```
    cd front-end-basics
    ```

2. Install dependencies
    ```
    npm install ...
    ```

3. Run the server
    ```
    npm start
    ```

### Frontend Setup

1. Navigate to src folder
    ```
    cd src
    ```

2. Install dependencies
    ```
    npm install ...
    ```

3. Deploy the Vite + React application
    ```
    npm run dev
    ```

### Running the application
To start the application, you can access the frontend application by entering the URL into your browser provided by Vite and the backend API will be accessible at `http://localhost:7080`



