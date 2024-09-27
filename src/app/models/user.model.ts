export class User {
  id: number;
  name: string;
  email: string = "";
  password: string = "";
  role: string = "";
  token: string = "";
  isInRoom: boolean;
  RoomId: number;
  constructor(
    id: number,
    name: string,
    isInRoom: boolean,
    RoomId: number
  ) {
    this.id = id;
    this.name = name;
    this.isInRoom = isInRoom;
    this.RoomId = RoomId;
  }
  //getters and setters
  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  getPassword(): string {
    return this.password;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  getRole(): string {
    return this.role;
  }
  setRole(role: string): void {
    this.role = role;
  }
  getToken(): string {
    return this.token;
  }
  setToken(token: string): void {
    this.token = token;
  }
  getIsInRoom(): boolean {
    return this.isInRoom;
  }
  setIsInRoom(isInRoom: boolean): void {
    this.isInRoom = isInRoom;
  }
  getRoomId(): number {
    return this.RoomId;
  }
  setRoomId(RoomId: number): void {
    this.RoomId = RoomId;
  }

  toString(): string {
    return (
      "User [id=" +
      this.id +
      ", name=" +
      this.name +
      ", email=" +
      this.email +
      ", password=" +
      this.password +
      ", role=" +
      this.role +
      ", token=" +
      this.token +
      ", isInRoom=" +
      this.isInRoom +
      ", RoomId=" +
      this.RoomId +
      "]"
    );
  }


}
