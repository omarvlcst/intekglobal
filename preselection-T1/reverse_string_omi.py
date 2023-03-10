array = '12345'
new = ''
N = len(array)-1
#print(N)
while N>=0:
    new=new+array[N]
    N=N-1
print(new)

"""
array = '12345'
new = ''
N = length(array)   #Programming in Python, N should be defined as N = length(s)-1, because indexes run from 0 to N-1 in an array of N elements
while N>=0:
    new = new+array[N]
    N = N-1

print(array)
"""