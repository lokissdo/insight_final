# Insight Platform

Welcome to the Insight Platform repository. This project requires Apache (XAMPP or Laragon), MySQL server and npm with specific configurations to run. Follow the steps below to set up and run the project.

## Prerequisites

Before you can run the project, make sure you have the following prerequisites installed on your system:

- Apache server (XAMPP, Laragon, or equivalent)
- MySQL server with the following configurations:
  - Username: root
  - Password: (no password)
  - Port: 3306
- Git (to clone this repository)


## Installation

1. **Install and Configure Apache Server**:

   - Download and install Apache server. You can use [XAMPP](https://www.apachefriends.org/index.html) or [Laragon](https://laragon.org/).

2. **Configure MySQL Server**:

   - Open your MySQL server and configure it with the following settings:
     - Username: root
     - Password: (no password)
     - Port: 3306

If you have different config for MySQL server, please go to `client/insight/insight/settings.py` and replace your config in DATABASES object.

3. **Create a MySQL Database**:

   - Create a new MySQL database and name it `insight_database`.

## Clone the Repository

```bash
git https://github.com/lokissdo/insight_final.git
cd insight_final

```


## Run the Install Script:

### On Windows, open a PowerShell Terminal and run:
```powershell
./install.ps1
```
### On macOS or Linux, open a Terminal and run:
```
./install.sh
```
The install script will set up the necessary configurations and dependencies for the project.
## Running the Project
1. **Start MySQL server on port `3306`**:
### On Windows

2. **Open a PowerShell Terminal**.

3. **Run the `start.ps1` Script**:

```powershell
./start.ps1

```

### On macOS or Linux
2. **Open a  Terminal**.

3. **Run the `start.sh` Script**:

```
./start.sh
```


The scripts will start the necessary components of the project. Please follow any further instructions provided by the project.