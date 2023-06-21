function UserProfilePic() {
  return (
    <div className="flex items-center gap-1 ">
      <div className="h-12 w-12 overflow-hidden rounded-full sm:h-14 sm:w-14">
        <img
          className="h-full w-full object-cover"
          src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
          alt=""
        />
      </div>
      <span className="font-medium text-neutral-300">John</span>
    </div>
  );
}

export default UserProfilePic;
