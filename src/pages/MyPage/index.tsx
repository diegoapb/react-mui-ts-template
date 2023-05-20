// Local imports
import MyComponent from '../../components/MyComponent';

// Component definition
function MyPagePage() {
  return (
    <MyComponent
      box={{
        sx: {
          background: 'rgb(0, 30, 60)',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    />
  );
}

// Default export
export default MyPagePage;
