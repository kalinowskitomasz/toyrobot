const { ToyRobot } = require('./robot');

describe('ToyRobot', () => {
  let robot;
  beforeEach(() => {
    robot = new ToyRobot();
  });

  it('should move after placing', () => {
    robot.place(0, 0, 'NORTH');
    robot.move();
    expect(robot.report()).toEqual({ x: 0, y: 1, facing: 'NORTH' });
  });

  it('should move and rotate after placing', () => {
    robot.place(0, 0, 'NORTH');
    robot.move();
    robot.right();
    robot.move();
    expect(robot.report()).toEqual({ x: 1, y: 1, facing: 'EAST' });
  });

  it('should return undefined if not placed first and moved', () => {
    robot.move();
    expect(robot.report()).toBeUndefined();
  });

  it('should ignore commands before place', () => {
    robot.move();
    robot.left();
    robot.place(1, 1, 'NORTH');
    expect(robot.report()).toEqual({ x: 1, y: 1, facing: 'NORTH' });
  });

  it('should ignore move commands after reaching the boundary', () => {
    robot.place(1, 1, 'NORTH');
    robot.move();
    robot.move();
    robot.move();
    robot.move();
    robot.move();
    robot.move();
    expect(robot.report()).toEqual({ x: 1, y: 4, facing: 'NORTH' });
  });

  it('should allow replacing', () => {
    robot.place(1, 1, 'NORTH');
    robot.move();
    robot.place(4, 4, 'EAST');
    expect(robot.report()).toEqual({ x: 4, y: 4, facing: 'EAST' });
  });

  it('should ignore invalid placing position', () => {
    robot.place(5, 1, 'NORTH');
    expect(robot.report()).toBeUndefined();
  });

  it('should ignore invalid placing direction', () => {
    robot.place(1, 1, 'FOOBAR');
    expect(robot.report()).toBeUndefined();
  });
});
