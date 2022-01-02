const util = (followers) => {
  // console.log(followers);
  const itemPerPages = 10;
  const page = Math.ceil(followers.length / 10);

  // array from array
  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * itemPerPages;
    // console.log(start); 0,10,20,30,...90 sampai 90 krna 9 * 10
    // gunakan return untuk memasukan kedalam array agar tidak undefined
    return followers.slice(start, start + itemPerPages);
  });

  return newFollowers;
  // console.log(newFollowers);
};

export default util;
