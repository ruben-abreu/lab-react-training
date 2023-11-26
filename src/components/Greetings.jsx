function Greetings({ lang, children }) {
  let language = '';

  switch (lang) {
    case 'en':
      language = 'Hello';
      break;
    case 'de':
      language = 'Hallo';
      break;
    case 'es':
      language = 'Hola';
      break;
    case 'fr':
      language = 'Bonjour';
      break;
    default:
      language = 'Hello, not a supported language';
  }

  return (
    <div className="greeting">
      <p>
        {language} {children}
      </p>
    </div>
  );
}

export default Greetings;
