import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        지원자 정보
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        * 표시는 필수로 입력해주세요.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="Name" label="이름" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="studentNumber" label="학번" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="phone" label="휴대폰 번호" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="exp"
            label="개발에 참여하신 경험이 있으시면 적어주세요"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="etc"
            label="하고싶은 말있으시면 적어주세요"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}