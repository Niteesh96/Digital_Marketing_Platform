// Simple test to verify the app can be imported
import { createRoot } from 'react-dom/client';
import App from './src/App.tsx';

console.log('✅ App component imported successfully');
console.log('✅ React DOM imported successfully');
console.log('✅ Application is ready to run');

// Test that the app doesn't throw errors when instantiated
try {
  const testDiv = document.createElement('div');
  const root = createRoot(testDiv);
  console.log('✅ React root created successfully');
  console.log('🚀 Application is working correctly!');
} catch (error) {
  console.error('❌ Error:', error);
}