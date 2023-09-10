function parseCommands(commands, robot) {
  for (const command of commands) {
    const parts = command.trim().split(' ');
    const action = parts[0];

    switch (action) {
      case 'PLACE':
        const [x, y, facing] = parts[1].split(',');
        robot.place(Number(x), Number(y), facing);
        break;
      case 'MOVE':
        robot.move();
        break;
      case 'LEFT':
        robot.left();
        break;
      case 'RIGHT':
        robot.right();
        break;
      case 'REPORT':
        const report = robot.report();
        if (report) console.log(`${report.x},${report.y},${report.facing}`);
        break;
    }
  }
}

module.exports = { parseCommands };
