from datetime import datetime
import sys

def simple_numbers(input_number):
    count = 0
    num = 2
    simple_num_list = []

    while count != int(input_number[1]):
        if num % 2 != 0 or num % 3 != 0 or num == 2 or num == 3:
            simple_num_list.append(num)
            count += 1
        num += 1
    
    return simple_num_list

start = datetime.now()
print(simple_numbers(sys.argv))
print('simple_numbers', datetime.now() - start)