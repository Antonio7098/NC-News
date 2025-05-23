export default function Header({ text }) {
    if (!text) {
      return null;
    }

    const firstLetter = text.slice(0, 1).toUpperCase();
    const restOfText = text.slice(1);
    
  
    return (
      <div className="text-center my-10">
        <h1 className="text-7xl font-bold">
          {/* The first letter is wrapped in its own span with the red color */}
          <span className="text-red-700">{firstLetter}</span>
          
          {/* The rest of the text is in another span with the black color */}
          <span className="text-slate-900">{restOfText}</span>
        </h1>
      </div>
    );
  }