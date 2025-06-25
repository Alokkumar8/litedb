# LiteDB - Simple JSON Database for JavaScript

A lightweight, no signup, no-setup JSON database service that allows you to store and retrieve data using simple HTTP requests. Feel free to use it in production, form sites and small projects.

## ✨ Features

- 🚀 **No Setup Required** - Start using immediately without registration
- ⚡ **Instant Storage** - Store JSON data with a simple POST request
- 🔍 **Easy Retrieval** - Get your data back with a GET request
- 🌐 **REST API** - Standard HTTP methods for all operations
- 📱 **Cross-Platform** - Works with any language or framework
- 🆓 **Free to Use** - No cost, no limits for basic usage

## 🚀 Quick Start

### 1. Store Data (POST)

Send a POST request to store your JSON data:

```http
POST https://litedb.vercel.app/db
Content-Type: application/json

{
  "id": "your-unique-id-here",
  "name": "Alok",
  "city": "Chennai"
}
```

### 2. Retrieve Data (GET)

Get your data back using the same ID:

```http
GET https://litedb.vercel.app/db?id=your-unique-id-here
```

Response:
```json
{
  "id": "your-unique-id-here",
  "name": "Alok",
  "city": "Chennai"
}
```

## 📖 Usage Examples

### JavaScript/Node.js

```javascript
const dbId = 'my-app-data-123'
const url = `https://litedb.vercel.app/db?id=\${dbId}`

// Store data
await fetch('https://litedb.vercel.app/db', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    id: dbId, 
    name: 'Alok', 
    city: 'Chennai' 
  })
})

// Retrieve data
const response = await fetch(url)
const data = await response.json()
console.log(data) // { id: 'my-app-data-123', name: 'Alok', city: 'Chennai' }
```

### HTML Form Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>LiteDB Form Example</title>
</head>
<body>
    <form id="userForm">
        <input type="text" id="name" placeholder="Enter name" required>
        <input type="text" id="city" placeholder="Enter city" required>
        <button type="submit">Save Data</button>
    </form>

    <script>
        document.getElementById('userForm').addEventListener('submit', async (e) => {
            e.preventDefault()
            
            const name = document.getElementById('name').value
            const city = document.getElementById('city').value
            const dbId = 'user-form-' + Date.now() // Generate unique ID
            
            try {
                await fetch('https://litedb.vercel.app/db', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: dbId, name, city })
                })
                alert('Data saved successfully!')
            } catch (error) {
                alert('Error saving data: ' + error.message)
            }
        })
    </script>
</body>
</html>
```

### Display Data on Webpage

```html
<!DOCTYPE html>
<html>
<head>
    <title>LiteDB Display Example</title>
</head>
<body>
    <div id="userData">Loading...</div>
    <button onclick="loadData()">Refresh Data</button>

    <script>
        async function loadData() {
            try {
                const response = await fetch('https://litedb.vercel.app/db?id=your-data-id')
                const data = await response.json()
                
                document.getElementById('userData').innerHTML = `
                    <h3>User Information</h3>
                    <p><strong>Name:</strong> \${data.name}</p>
                    <p><strong>City:</strong> \${data.city}</p>
                `
            } catch (error) {
                document.getElementById('userData').innerHTML = 'Error loading data'
            }
        }

        // Load data when page loads
        loadData()
    </script>
</body>
</html>
```

## 🔧 API Reference

### Store Data
- **Method:** POST
- **URL:** `https://litedb.vercel.app/db`
- **Headers:** `Content-Type: application/json`
- **Body:** JSON object with required `id` field

### Retrieve Data
- **Method:** GET
- **URL:** `https://litedb.vercel.app/db?id=YOUR_ID`
- **Response:** JSON object that was stored

## 💡 Best Practices

### 1. Use Unique IDs
Always use unique identifiers for your data to avoid conflicts:

```javascript
// Good: Use timestamps, UUIDs, or app-specific prefixes
const id = 'myapp-user-' + Date.now()
const id = 'blog-post-' + crypto.randomUUID()

// Avoid: Generic or common IDs
const id = 'data' // Too generic
const id = '123'  // Too simple
```

### 2. Handle Errors Gracefully

```javascript
try {
    const response = await fetch('https://litedb.vercel.app/db?id=my-data')
    if (!response.ok) {
        throw new Error(`HTTP error! status: \${response.status}`)
    }
    const data = await response.json()
    // Use data...
} catch (error) {
    console.error('Failed to fetch data:', error)
    // Show user-friendly error message
}
```

### 3. Validate Data Before Storing

```javascript
function validateUserData(data) {
    if (!data.id || !data.name) {
        throw new Error('ID and name are required')
    }
    if (data.name.length > 100) {
        throw new Error('Name too long')
    }
    return true
}

// Use validation before storing
const userData = { id: 'user-123', name: 'John Doe' }
if (validateUserData(userData)) {
    // Store data...
}
```

## 🚨 Important Notes

- **Data Persistence:** Data is stored permanently and can be used in production
- **No Authentication:** Anyone with your ID can access your data
- **Rate Limiting:** Excessive requests may be throttled
- **Data Size:** Keep individual records under 1MB for best performance
- **Production Use:** This service is intended for development, form sites and demos

## 🤝 Contributing

We welcome contributions! Please visit our [GitHub repository](https://github.com/Alokkumar8/litedb) to:

- Report bugs
- Request features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **GitHub Issues:** [Report bugs or request features](https://github.com/Alokkumar8/litedb/issues)
- **Documentation:** [Full API documentation](https://litedb.vercel.app/docs)
- **Examples:** [More examples and tutorials](https://litedb.vercel.app/examples)

---

**Made with ❤️ for developers who need simple data storage**

[🌐 Visit LiteDB](https://litedb.vercel.app) | [📚 Documentation](https://litedb.vercel.app) | [💻 GitHub](https://github.com/Alokkumar8/litedb)
```