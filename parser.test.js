const { parseCommands } = require('./parser');

describe('parseCommands', () => {
  console.log = jest.fn();

  const robot = {
    place: jest.fn(),
    move: jest.fn(),
    report: jest.fn(),
    right: jest.fn(),
    left: jest.fn(),
  };
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should parse place', () => {
    const mockCommands = ['PLACE 0,0,NORTH'];
    parseCommands(mockCommands, robot);

    expect(robot.place).toHaveBeenCalledWith(0, 0, 'NORTH');
  });

  it('should parse move', () => {
    const mockCommands = ['MOVE'];
    parseCommands(mockCommands, robot);

    expect(robot.move).toHaveBeenCalled();
  });

  it('should parse left', () => {
    const mockCommands = ['LEFT'];
    parseCommands(mockCommands, robot);

    expect(robot.left).toHaveBeenCalled();
  });

  it('should parse right', () => {
    const mockCommands = ['RIGHT'];
    parseCommands(mockCommands, robot);

    expect(robot.right).toHaveBeenCalled();
  });

  it('should parse report', () => {
    robot.report.mockReturnValue({ x: 1, y: 1, facing: 'NORTH' });
    const mockCommands = ['REPORT'];
    parseCommands(mockCommands, robot);

    expect(robot.report).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('1,1,NORTH');
  });

  it('should ignore invalid input', () => {
    const mockCommands = ['FOOBAR'];
    parseCommands(mockCommands, robot);

    expect(robot.place).not.toHaveBeenCalled();
    expect(robot.move).not.toHaveBeenCalled();
    expect(robot.report).not.toHaveBeenCalled();
    expect(robot.right).not.toHaveBeenCalled();
    expect(robot.left).not.toHaveBeenCalled();
  });
});
