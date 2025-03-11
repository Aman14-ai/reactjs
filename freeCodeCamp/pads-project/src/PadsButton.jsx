export default function PadsButton(props) {
    return (
      <button 
        className={`${props.on} pads-button`}  // Combined class names
        style={{ backgroundColor: props.backgroundColor }} 
        key={props.id}
      >
      </button>
    );
  }
  