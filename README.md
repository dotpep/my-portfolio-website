# My personal Portfolio Website Project

original source template: https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2

## Deploy instruction

- `cd /var/www/portfolio.dotpep.xyz`
- `git pull`
- `sudo systemctl reload nginx`

## TODO

- [ ] there is many todo's that I'm writed directly on code, check it
- [ ] i need to make it with DB connected
- [ ] make ru, end, kaz swapper
- [ ] make dark and white theme swapper

- [ ] replace cv, resume pdf files with my actual resumes and cvs (View CV eng, and View CV rus assign with my CV, Resume)
- [ ] make certificates in pdf format
- [x] add wrapper and buttons to scroll certificates

- [x] add Telegram icon on first section below My Socials text
- [x] Correct About Section
- [x] Correct Experience, Skills Section
- [ ] Rewise project section
- [ ] write SEO optimization on <head>

### Need to be Fixed

- [x] in phone version in profile section text "Hello, I'm and my Name" is above of my profile circle picture (in edge's default setted to website dark theme it looks very interesting and may be Cool, that text top of my picture)

## Deploying Log code to digitalocean droplet with subdomain

portfolio.dotpep.xyz
www.portfolio.dotpep.xyz


_________________________>>>>><<<<<_____________________ 
replace portfolio.dotpep.xyz to your subdomain name.

sudo mkdir  
sudo chown -R $USER:$USER /var/www/portfolio.dotpep.xyz
sudo chmod -R 777 /var/www/portfolio.dotpep.xyz
sudo chmod -R -f 777 /var/www/portfolio.dotpep.xyz

nano /var/www/sub.mritsolotion/index.html

<h2>Subdomain website HTML works well!</h2>

---
for apache:

sudo nano /etc/apache2/sites-available/portfolio.dotpep.xyz.conf

<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName portfolio.dotpep.xyz
    ServerAlias www.portfolio.dotpep.xyz
    DocumentRoot /var/www/portfolio.dotpep.xyz
<Directory /var/www/portfolio.dotpep.xyz>
        Options FollowSymLinks
        AllowOverride all
        Require all granted
    </Directory>
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

sudo a2ensite portfolio.dotpep.xyz
sudo systemctl reload apache2

---
for nginx:

sudo nano /etc/apache2/sites-available/portfolio.dotpep.xyz.conf




sudo a2ensite portfolio.dotpep.xyz
sudo systemctl reload nginx


_________<<<<<>>>>>___________


## for nginx

Create the Directory for Your Subdomain:
sudo mkdir -p /var/www/portfolio.dotpep.xyz
sudo chown -R $USER:$USER /var/www/portfolio.dotpep.xyz
sudo chmod -R 755 /var/www/portfolio.dotpep.xyz

Create an HTML File:
nano /var/www/portfolio.dotpep.xyz/index.html

Add your HTML content:
<h2>Subdomain website HTML works well!</h2>


Configure Nginx for Your Subdomain:
sudo nano /etc/nginx/sites-available/portfolio.dotpep.xyz

Add the following configuration:
server {
    listen 80;
    server_name portfolio.dotpep.xyz www.portfolio.dotpep.xyz;

    root /var/www/portfolio.dotpep.xyz;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    error_log /var/log/nginx/portfolio.dotpep.xyz.error.log;
    access_log /var/log/nginx/portfolio.dotpep.xyz.access.log;
}


Enable the Configuration:
sudo ln -s /etc/nginx/sites-available/portfolio.dotpep.xyz /etc/nginx/sites-enabled/

Test Nginx Configuration:
sudo nginx -t

Reload Nginx:
sudo systemctl reload nginx

Obtain an SSL Certificate with Certbot: Run Certbot for your subdomain:
sudo certbot --nginx -d portfolio.dotpep.xyz -d www.portfolio.dotpep.xyz
