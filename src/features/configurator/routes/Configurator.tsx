import { Viewer } from '../components/Viewer';

export const Configurator = () => {
  const formStyle = {
    boxShadow: '0 1px 40px rgba(0, 0, 0, 0.27)',
  };

  return (
    <div className="flex flex-col w-full md:flex-row md:h-full">
      <div className="w-full overflow-hidden bg-gray-50 h-96 md:h-full md:w-5/12">
        <Viewer />
      </div>
      <div className="z-10 w-full bg-white md:h-full md:w-7/12" style={formStyle}>
        TODO
      </div>
    </div>
  );
};
