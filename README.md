# Server Badge : app designed to display a visual badge on the UI

## Description
Server Badge is a Frappe app designed to display a visual badge on the UI indicating whether the server is a staging server or a production server. This helps users distinguish between different environments and avoid accidental actions on the wrong server.

## Screenshots
#### Desktop Screen
![Version 15](https://github.com/ruknsoftware/stage-badge/assets/85282854/db87e04e-950a-4176-9852-d856056550ab) ![Version 14](https://github.com/ruknsoftware/stage-badge/assets/85282854/3e253cbe-5e2b-401f-8d5a-9c06495a2506)

#### Mobile Screen
![Version 15](https://github.com/ruknsoftware/stage-badge/assets/85282854/48666a3f-f742-411c-8594-79cb863941bc) ![Version 14](https://github.com/ruknsoftware/stage-badge/assets/85282854/885a7c91-69ec-499a-acc8-7ed2853f6e75)


## Installation
1. Get the bench:
pip install frappe-bench

2. Create a new bench:
bench init my-bench

3. Get the Server Badge app:
bench get-app https://github.com/ruknsoftware/server-badge

4. Install the app on your site:
bench --site [site-name] install-app server_badge

## Usage
After installation, Ensure your site_config.json file has the server_type key set to "Stage" and The app will automatically display the badge when the page loads if the server is configured as a staging server.

## Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## Support
If you encounter any problems or have any suggestions, please open an issue on this repository.

## Contact

If you have any questions or suggestions, please feel free to contact me at https://www.linkedin.com/company/ruknsoftware/ 

## License

MIT
