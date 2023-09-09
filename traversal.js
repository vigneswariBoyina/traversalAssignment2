const routes = {
  'Paris': ['Skopje'],
  'Skopje': ['Paris'],
  'Zurich': ['Amsterdam'],
  'Amsterdam': ['Barcelona'],
  'Prague': ['Zurich'],
  'Barcelona': ['Berlin'],
  'Kiev': ['Prague'],
  'Berlin': ['Kiev', 'Amsterdam']
}

// Function to perform DFS and find the route
function findRoute(currentCity, visited, path) {
  // Add the current city to the path
  path.push(currentCity);

  // Check if we've visited all cities; if so, we've found the route
  if (path.length === Object.keys(visited).length) {
    return path;
  }

  // Explore the next cities from the current city
  for (let nextCity of routes[currentCity]) {
    if (!visited[nextCity]) {
      visited[nextCity] = true;
      const newPath = findRoute(nextCity, visited, [...path]);
      if (newPath) {
        return newPath;
      }
      visited[nextCity] = false; // Allow revisiting the city
    }
  }

  // If no valid route is found, return null
  return null;
}

// Initialize visited cities data structure
const visited = {
  'Kiev': false,
  'Prague': false,
  'Zurich': false,
  'Amsterdam': false,
  'Barcelona': false,
  'Berlin': false
};

// Call the function to find the route starting from Kiev
const path = findRoute('Kiev', visited, []);

// Check if a valid route was found
if (path !== null) {
  console.log("The route your son traveled is: ", path.join(" -> "));
} else {
  console.log("No valid route found.");
}