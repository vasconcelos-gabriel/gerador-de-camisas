import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          {' '}
          Selecionar arquivo
        </label>
        <p className="mt-2 truncate text-xs text-gray-500">
          {file === '' ? 'Nenhum arquivo selecionado' : file.name}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CustomButton
            type="outline"
            title="Logo"
            handleClick={() => readFile('logo')}
            customStyles="text-xs"
          />
          <CustomButton
            type="filled"
            title="Estampa"
            handleClick={() => readFile('full')}
            customStyles="text-xs"
          />
        </div>
      </div>
    </div>
  )
}

export default FilePicker
