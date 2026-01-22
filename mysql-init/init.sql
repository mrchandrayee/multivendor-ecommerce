-- This script runs when the MySQL container starts for the first time
-- The database 'goshop' is already created via environment variables
-- Additional initialization can be added here if needed

USE goshop;

-- Example: Create a test table (optional)
-- CREATE TABLE IF NOT EXISTS test (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );

-- The actual schema will be created by Prisma migrations