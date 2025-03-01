const SkillBar = ({ skill, percentage, color, logo }) => {
  return (
    <div className="flex items-center space-x-3">
      {logo && <div>{logo}</div>}
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
            {skill}
          </span>
          <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default SkillBar;
