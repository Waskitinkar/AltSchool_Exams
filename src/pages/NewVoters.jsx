import { useNavigate } from 'react-router-dom';

export default function NewVoters() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Enter your Voting Details</h1>
      <button
        onClick={() => {
          navigate('/Electoral');
        }}
      >
        This is a nested route 
      </button>
    </div>
  );
}
