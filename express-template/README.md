## Example Docker with an Express App
### App
```bash
docker run -p 3000:3000 -v $(pwd):/var/www -w "/var/www" node npm start 
```