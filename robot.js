class ToyRobot {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.facing = undefined;
    this.tableSizeX = 5;
    this.tableSizeY = 5;
  }

  place(x, y, facing) {
    if (this._isValidPosition(x, y) && this._isValidDirection(facing)) {
      this.x = x;
      this.y = y;
      this.facing = facing;
    }
  }

  // Keeping the direction as a string is not the most elegant or clever solution
  // but makes the code more explicit and easy to understand
  move() {
    if (this.x == null || this.y == null || this.facing == null) return;

    let newX = this.x;
    let newY = this.y;

    switch (this.facing) {
      case 'NORTH':
        newY++;
        break;
      case 'SOUTH':
        newY--;
        break;
      case 'EAST':
        newX++;
        break;
      case 'WEST':
        newX--;
        break;
    }

    if (this._isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  left() {
    if (!this.facing) return;

    switch (this.facing) {
      case 'NORTH':
        this.facing = 'WEST';
        break;
      case 'SOUTH':
        this.facing = 'EAST';
        break;
      case 'EAST':
        this.facing = 'NORTH';
        break;
      case 'WEST':
        this.facing = 'SOUTH';
        break;
    }
  }

  right() {
    if (!this.facing) return;

    switch (this.facing) {
      case 'NORTH':
        this.facing = 'EAST';
        break;
      case 'SOUTH':
        this.facing = 'WEST';
        break;
      case 'EAST':
        this.facing = 'SOUTH';
        break;
      case 'WEST':
        this.facing = 'NORTH';
        break;
    }
  }

  report() {
    if (
      this.x !== undefined &&
      this.y !== undefined &&
      this.facing !== undefined
    ) {
      return { x: this.x, y: this.y, facing: this.facing };
    }
  }

  _isValidPosition(x, y) {
    return x >= 0 && x < this.tableSizeX && y >= 0 && y < this.tableSizeY;
  }

  _isValidDirection(direction) {
    return ['NORTH', 'SOUTH', 'EAST', 'WEST'].includes(direction);
  }
}

module.exports = { ToyRobot };
