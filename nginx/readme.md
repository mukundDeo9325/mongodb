```
cd ../nginx
```
```
docker build -t my-nginx .
```
```
docker run -d --name nginx --network mynetwork -p 80:80 my-nginx
```
