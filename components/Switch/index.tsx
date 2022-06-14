import { FC } from 'react';

import useTheme from 'utils/hooks/useTheme';

const ToggleTheme: FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="toggle-theme flex">
      <label className="switch" htmlFor="switch">
        <input
          id="switch"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default ToggleTheme;
