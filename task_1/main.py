from datetime import datetime
import sys

def simple_numbers(input_number):
    num = 2
    simple_num_list = []

    while len(simple_num_list) < int(input_number[1]):
        if (num % 2 == 0 and num != 2) or (num ** 0.5 in simple_num_list) :
            num += 1
            continue
        elif simple_num_list:
            not_simple = 0
            for index, val in enumerate(simple_num_list):
                if num % simple_num_list[index] == 0:
                    not_simple += 1
                    break
            if not_simple == 1:
                num += 1
            else:
                simple_num_list.append(num)
                num += 1
        else:
            simple_num_list.append(num)
            num += 1
    
    return simple_num_list

start = datetime.now()
print(simple_numbers(sys.argv))
print('simple_numbers', datetime.now() - start)