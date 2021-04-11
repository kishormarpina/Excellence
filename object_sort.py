def Obj_sort_byId(dic):
  new_dict = {}
  for i in sorted(dic.keys()):
    new_dict[i] = d[i]
  return new_dict

d = {
    "4":"abc",
    "1" :"ab2",
    "5":"abc3",
    "6":"abc5"
    }
print(Obj_sort_byId(d))