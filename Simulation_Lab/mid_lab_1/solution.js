function customer() {
	return {
		// customer_no: 0,
		random_iat: 0,
		iat: 0,
		arrival_time: 0,
		random_service_time: 0,
		service_time: 0,
		time_service_begin: 0,
		time_service_ends: 0,
		waiting_time: 0,
		time_spent_in_system: 0,
		idle_time_of_server: 0,
	};
}
const size = 10 + 1;
const customers = Array(size)
	.fill()
	.map(() => customer());

let total_waiting_time = 0;
let wait_in_queue = 0;
let total_idle_time = 0;

for (let i = 1; i < customers.length; i++) {
	{
		// Random IAT
		if (i > 1) {
			customers[i].random_iat = parseInt(Math.random() * 1000 + 1);
		}
	}
	{
		// IAT
		// =IF(B4 <= 125, 1, IF(B4 <= 250, 2, IF(B4 <= 375, 3, IF(B4 <= 500, 4, IF(B4 <= 625, 5, IF(B4 <= 750, 6, IF(B4 <= 875, 7, IF(B4 <= 1000, 8))))))))
		if (i === 1) {
			customers[i].iat = 0;
		} else if (customers[i].random_iat <= 125) {
			customers[i].iat = 1;
		} else if (customers[i].random_iat <= 250) {
			customers[i].iat = 2;
		} else if (customers[i].random_iat <= 375) {
			customers[i].iat = 3;
		} else if (customers[i].random_iat <= 500) {
			customers[i].iat = 4;
		} else if (customers[i].random_iat <= 625) {
			customers[i].iat = 5;
		} else if (customers[i].random_iat <= 750) {
			customers[i].iat = 6;
		} else if (customers[i].random_iat <= 875) {
			customers[i].iat = 7;
		} else if (customers[i].random_iat <= 1000) {
			customers[i].iat = 8;
		}
	}
	{
		// Arrival Time
		if (i > 1) {
			customers[i].arrival_time =
				customers[i - 1].arrival_time + customers[i].iat;
		}
	}
	{
		// Random Service Time
		customers[i].random_service_time = parseInt(Math.random() * 100 + 1);
	}
	{
		// Service Time
		// =IF(E3 <= 10, 1, IF(E3 <= 30, 2, IF(E3 <= 60, 3, IF(E3 <= 85, 4, IF(E3 <= 95, 5, IF(E3 <= 100, 6))))))
		if (customers[i].random_service_time <= 10) {
			customers[i].service_time = 1;
		} else if (customers[i].random_service_time <= 30) {
			customers[i].service_time = 2;
		} else if (customers[i].random_service_time <= 60) {
			customers[i].service_time = 3;
		} else if (customers[i].random_service_time <= 85) {
			customers[i].service_time = 4;
		} else if (customers[i].random_service_time <= 95) {
			customers[i].service_time = 5;
		} else if (customers[i].random_service_time <= 100) {
			customers[i].service_time = 6;
		}
	}
	{
		// Time Service Begins
		customers[i].time_service_begin = Math.max(
			customers[i].arrival_time,
			customers[i - 1].time_service_ends
		);
	}
	{
		// Time Service Ends
		customers[i].time_service_ends =
			customers[i].arrival_time + customers[i].service_time;
	}
	{
		// Waiting Time
		customers[i].waiting_time =
			customers[i].time_service_begin - customers[i].arrival_time;
	}
	{
		// Time Spent in System
		customers[i].time_spent_in_system =
			customers[i].time_service_ends - customers[i].arrival_time;
	}
	{
		// Idle Time of Server
		customers[i].idle_time_of_server =
			customers[i].time_service_begin -
			customers[i - 1].time_service_ends;
	}

	total_waiting_time += customers[i].waiting_time;
	if (customers[i].waiting_time > 0) {
		wait_in_queue++;
	}
}

console.table(customers);
