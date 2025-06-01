# Node.js Clustering Express Server

A high-performance Express.js server implementation that utilizes Node.js clustering to leverage multiple CPU cores for improved concurrency and performance.

## 🚀 Features

- **Multi-core utilization**: Automatically creates worker processes equal to the number of CPU cores
- **Load balancing**: Built-in round-robin load balancing across worker processes
- **High concurrency**: Handle multiple requests simultaneously across different CPU cores
- **Process identification**: Each response shows which worker process handled the request
- **Fault tolerance**: Individual worker failures don't bring down the entire application

### Process Flow

1. **Primary Process**: 
   - Detects available CPU cores
   - Forks worker processes (one per core)
   - Manages worker lifecycle

2. **Worker Processes**:
   - Each runs an independent Express server
   - All listen on the same port (Node.js handles port sharing)
   - Process incoming requests independently

3. **Load Balancing**:
   - Node.js automatically distributes incoming requests
   - Uses round-robin algorithm by default
   - Ensures even distribution across workers

## 📊 Performance Benefits

- **CPU Utilization**: Utilizes all available CPU cores instead of just one
- **Throughput**: Significantly higher request handling capacity
- **Responsiveness**: Reduced response times under high load
- **Scalability**: Automatically scales with available hardware

## 🔗 Related Resources

- [Node.js Cluster Documentation](https://nodejs.org/api/cluster.html)
- [Express.js Documentation](https://expressjs.com/)
- [PM2 Process Manager](https://pm2.keymetrics.io/)

