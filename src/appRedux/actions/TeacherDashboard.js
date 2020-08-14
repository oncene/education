import {
  GET_USER_DETAILS,
  GET_SCHOOL_DETAILS,
  SHOW_PARALLEL,
  NEW_PARALLEL,
	SHOW_SUBJECT,
	NEW_SUBJECT
} from "constants/ActionTypes";
import {
  db,
  firebase
} from "../../firebase/firebase";
export const getUserDetails = (data) => (dispatch, getState) => {
	console.log(getState());
	var user_id = getState().auth.authUser;
	db.collection("users").doc(user_id).get().then((snapshot)=> {
		let items = snapshot.data();
		console.log(items);
		dispatch(getSchoolDetails(items.school_id[0]));
		dispatch(getParallels(items.parallel));
		//dispatch(getSubjects(items.school_id[0]));
		return dispatch({
			type: GET_USER_DETAILS,
			user_details: items
		  });
	}).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

export const AddParallel = (title, description) => (dispatch, getState) => {
	var school_id = getState().teacherdashboard.school_details.school_id;
	var user_id = getState().auth.authUser;
	var parallels = getState().teacherdashboard.parallels;
	var add = {
		title: title,
		description: description,
		status:1,
		school_id: school_id
	};
	db.collection("parallels").add(add).then(function(doc) {
		var parallel_id = doc.id;
		if(parallel_id){
			parallels.unshift(add);
			add['parallel_id'] = parallel_id;
			db.collection("users").doc(user_id).update({
				parallel: firebase.firestore.FieldValue.arrayUnion(parallel_id)
			});
			return dispatch({
				type: NEW_PARALLEL,
				parallels: parallels
			});
		}
	})
	.catch(function(error) {
		console.error("Error writing document: ", error);
	});
}
export const AddSubjects = (parallel_id,title, description) => (dispatch, getState) => { 
	var user_id = getState().auth.authUser;
	var subjects = getState().teacherdashboard.subjects;
	var add = {
		title: title,
		description: description,
		status:1,
		parallel_id: parallel_id
	};
	db.collection("subjects").add(add).then(function(doc) {
		var subject_id = doc.id;
		if(subject_id){
			subjects.unshift(add);
			add['subject_id'] = subject_id;
			db.collection("users").doc(user_id).collection("subjects").doc(parallel_id).set(add);
			return dispatch({
				type: NEW_SUBJECT,
				subjects: subjects
			});
		}
	})
	.catch(function(error) {
		console.error("Error writing document: ", error);
	});
}
export const getSchoolDetails = (school_id) => (dispatch, getState) => {
	console.log(school_id);
	db.collection("school").doc(school_id).get().then((snapshot)=> {
		let items = snapshot.data();
			console.log(items);
		items.school_id = school_id;
		return dispatch({
			type: GET_SCHOOL_DETAILS,
			school_details: items
		  });
	}).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

export const getParallels = (parallels_id) => (dispatch, getState) => {

	var items = [];
	for(var i=0;i<parallels_id.length;i++){
		db.collection("parallels").doc(parallels_id[i]).get().then((snapshot)=> {
			let item = snapshot.data();
			item['parallel_id'] = parallels_id[i];
				items.push(item);
			if(i == (items.length)){
				return dispatch({
					type: SHOW_PARALLEL,
					parallels: items
				});
			}
		}).catch(function (error) {
			console.log("Error getting document:", error);
		});
		
	}
}
export const getSubjects = (subjects_id) => (dispatch, getState) => {
	console.log(subjects_id);
	db.collection("school").doc(subjects_id).get().then((snapshot)=> {
		let items = snapshot.data();
			console.log(items);
     
		return dispatch({
			type: GET_SCHOOL_DETAILS,
			school_details: items
		  });
	}).catch(function (error) {
        console.log("Error getting document:", error);
    });
}