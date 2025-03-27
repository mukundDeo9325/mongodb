```
cd mongo
```
```
docker build -t my-mongo .
```
```
docker run -d --name mongo --network mynetwork -p 27017:27017 my-mongo
```
