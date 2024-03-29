import cn from 'classnames';
import { useId } from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const ids = useSelector((state) => state.levels.value.ids);
  const levels = useSelector((state) => state.levels.value.entities);

  const winColor = 'bg-green-400';
  const winColorHover = 'active:bg-green-700';
  const winColorActive = 'hover:bg-green-500';

  const loseColor = 'bg-violet-400';
  const loseColorHover = 'active:bg-violet-700';
  const loseColorActive = 'hover:bg-violet-500';

  // start classes, which change when player win level

  const preClasses = [
    {
      [winColor]: false,
      [winColorHover]: false,
      [winColorActive]: false,
      [loseColor]: true,
      [loseColorHover]: true,
      [loseColorActive]: true,
    },
    'text-white',
    'mx-auto',
    'my-2',
    'h-10',
    'rounded-lg',
    'w-48',
    'cursor-pointer',
    'transition',
    'duration-300',
    'easy-in-out',
  ];

  const classes = ids.map((item) => {
    if (levels[item].ended === 'false') {
      preClasses[0][winColor] = false;
      preClasses[0][winColorHover] = false;
      preClasses[0][winColorActive] = false;
      preClasses[0][loseColor] = true;
      preClasses[0][loseColorHover] = true;
      preClasses[0][loseColorActive] = true;
      const result = cn(preClasses);
      return result;
    }

    preClasses[0][winColor] = true;
    preClasses[0][winColorHover] = true;
    preClasses[0][winColorActive] = true;
    preClasses[0][loseColor] = false;
    preClasses[0][loseColorHover] = false;
    preClasses[0][loseColorActive] = false;
    const result = cn(preClasses);
    return result;
  });

  return (
    <div className="grid grid-cols-5 gap-1 justify-between mx-4">
      {classes.map((item, i) => (
        <button key={useId} className={item}>
          <span className="object-center">{i + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default ProgressBar;
