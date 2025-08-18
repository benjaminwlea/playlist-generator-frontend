import packageJson from '../../package.json'

function Title() {
  return (
    <div>
      <h1>Playlist Generator</h1>
      <h4>Ver. {packageJson.version}</h4>
    </div>
  );
}

export default Title;